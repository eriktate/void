use sha2::Sha512;
use hmac::{Hmac, Mac};

type HmacSha512 = Hmac<Sha512>;

const SECRET: &'static str = std::env::get("VOID_SIGNING_KEY").unwrap();

// pub fn sign<'a>(input: impl Into<&'a [u8]>) -> String {
//     let mut mac = HmacSha512::new_from_slice(SECRET.as_bytes()).unwrap();
//     mac.update(input.into());
//     let result = mac.finalize();
//     Ok(base64::encode(format!("{}:{}", input, result)))
// }

// pub fn validate<'a>(input: &'a str) -> bool {
//     let mut mac = HmacSha512::new_from_slice(SECRET.as_bytes()).expect("need signing key");

//     input.split(':')
// }

