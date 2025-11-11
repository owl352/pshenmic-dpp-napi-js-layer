import {setDpp} from "./src/dpp";
import * as protocol from 'pshenmic-dpp-napi';

setDpp(protocol);

export {KeyType, NetworkWASM, PlatformVersionWASM, Purpose, SecurityLevel} from "./src/types";
export {IdentityWASM, IdentifierWASM, IdentityPublicKeyWASM} from "./src/dpp"