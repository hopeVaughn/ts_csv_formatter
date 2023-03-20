import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";
import { HtmlReport } from "./reportTargets/HtmlReports";
// Create and object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')
// Create an instance of 'MatchReader' and pass in something that satisfies the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load();


const summary = new Summary(
  new WinsAnalysis('Man City'),
  new HtmlReport(),
);

summary.buildAndPrintReport(matchReader.matches)