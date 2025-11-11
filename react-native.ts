import {setDpp} from "./src/dpp";
import * as protocol from 'pshenmic-dpp-napi/react-native';
import {DashPlatformProtocol} from "./src/types";

setDpp(protocol as unknown as DashPlatformProtocol);

export {KeyType, NetworkWASM, PlatformVersionWASM, Purpose, SecurityLevel} from "./src/types";
export {IdentityWASM, IdentifierWASM, IdentityPublicKeyWASM} from "./src/dpp"