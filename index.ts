import {DashPlatformProtocol} from "./src/types";
import {DPP} from "./src/dpp";
import * as protocol from 'pshenmic-dpp-napi';

const dpp: DPP = new DPP(protocol);

export default dpp