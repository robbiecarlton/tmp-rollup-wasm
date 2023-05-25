import foo from './foo.js';
import { KeyManager, deriveSeedFrom } from '@holo-host/cryptolib'

function go () {
    // console.log(foo)
    const seed = deriveSeedFrom(new Uint8Array([]), 'a', 'b')
    const keys = new KeyManager(seed)

    console.log("publicKey", keys.publicKey())

    const message = new Uint8Array([0, 1, 2, 3, 2, 1])

    const signature = keys.sign(message)

    console.log("signature", signature)

    const new_signature = new Uint8Array(Array.from(signature).reverse())

    console.log("new_signature", new_signature)

    const verified = KeyManager.verifyWithPublicKey(message, signature, keys.publicKey())

    console.log('verified', verified)
}

export default go

go()