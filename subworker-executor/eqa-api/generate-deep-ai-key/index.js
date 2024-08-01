// Generate a random string by rounding a random number and converting it to a string
let myrandomstr = Math.round(Math.random() * 100000000000).toString();

// Define a custom hash function
const myhashfunction = (function() {
    // Initialize an array 'a' with 64 elements
    const a = [];
    for (let b = 0; b < 64; b++) {
        a[b] = Math.floor(4294967296 * Math.sin((b + 1) % Math.PI));
    }

    return function(input) {
        // Initialize variables with specific constants
        let d = 1732584193;
        let e = 4023233417;
        let f, k;
        const g = [d, e, ~d, ~e];
        const h = [];
        
        // Encode the input string and append a padding character
        const l = unescape(encodeURI(input)) + "\u0080";
        let length = l.length;
        
        // Determine the number of 32-bit words needed
        let c = Math.floor(--length / 4) + 2 | 15;
        
        // Pack the characters of the string 'l' into the array 'h'
        h[--c] = 8 * length;
        while (length >= 0) {
            h[length >> 2] |= l.charCodeAt(length) << (8 * (length % 4));
            length--;
        }

        // Process the input in 512-bit chunks
        for (let b = 0, l = 0; b < c; b += 16) {
            let hashParts = [...g];

            // Perform the core transformations for 64 iterations
            for (let l = 0; l < 64; l++) {
                const i = Math.floor(l / 16);
                const shift = [7, 12, 17, 22, 5, 9, 14, 20, 4, 11, 16, 23, 6, 10, 15, 21][i * 4 + l % 4];
                const index = b | [0, 5 * l + 1, 3 * l + 5, 7 * l][i] & 15;

                const temp = hashParts[0] + [
                    (hashParts[1] & hashParts[2]) | (~hashParts[1] & hashParts[3]),
                    (hashParts[3] & hashParts[1]) | (~hashParts[3] & hashParts[2]),
                    hashParts[1] ^ hashParts[2] ^ hashParts[3],
                    hashParts[2] ^ (hashParts[1] | ~hashParts[3])
                ][i] + a[l] + ~~h[index];
                
                hashParts = [
                    hashParts[3],
                    hashParts[0] + ((temp << shift) | (temp >>> (32 - shift))),
                    hashParts[1],
                    hashParts[2]
                ];
            }
            d = hashParts[1];
            e = hashParts[2];

            // Update the hash values
            for (let l = 4; l > 0; ) {
                hashParts[--l] += g[l];
            }
        }

        // Convert the hash value to a hexadecimal string and reverse it
        let result = "";
        for (let l = 0; l < 32; l++) {
            result += ((hashParts[l >> 3] >> (4 * (1 ^ l))) & 15).toString(16);
        }

        return result.split("").reverse().join("");
    }
})();

// Generate the API key using the custom hash function
const tryitApiKey = 'tryit-' + myrandomstr + '-' +
    myhashfunction(
        navigator.userAgent +
        myhashfunction(
            navigator.userAgent +
            myhashfunction(
                navigator.userAgent + myrandomstr + "x"
            )
        )
    );
return tryitApiKey;
