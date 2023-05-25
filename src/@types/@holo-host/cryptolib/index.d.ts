/// <reference types="node" />

declare module '@holo-host/cryptolib' {  
    export function deriveSeedFrom(hhaId: Uint8Array, email: string, password: string): Uint8Array
  
    export class KeyManager {
      static verifyWithPublicKey(message: Uint8Array, signature: Uint8Array, publicKey: Uint8Array): boolean

      constructor(seed: Uint8Array)

      publicKey(): Uint8Array

      sign(message: Uint8Array): Uint8Array
    }

    export class Codec {
      static AgentId: AgentIdCodec
    }
    
    class AgentIdCodec {
      encode(bytes: Buffer): string
      decode(agentId: string): Buffer
    }
  }

