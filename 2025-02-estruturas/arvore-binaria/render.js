import fs from "fs";
import { DotParser } from "@vizdom/vizdom-ts-node";

const DOT_INPUT = "arvore.dot";
const SVG_OUTPUT = "arvore.svg";

const dotCode = fs.readFileSync(DOT_INPUT).toString();

const dot = new DotParser();
const graph = dot.parse(dotCode);
const positioned = graph.to_directed().layout();
fs.writeFileSync(SVG_OUTPUT, positioned.to_svg().to_string());
