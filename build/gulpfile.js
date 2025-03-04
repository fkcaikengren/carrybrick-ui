// 打包方式：串行(series)  并行(parallel)
import { series, parallel } from "gulp"


import { buildUMD } from "./build-umd.js";
import { buildES } from "./build-es.js";

export default series(
  parallel( buildUMD, buildES),
  // copyTypesDefinitions
);
