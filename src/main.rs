use rand::prelude::*;

fn main() {
    let nouns: Vec<&str> = include_str!("../nouns.csv").split('\n').collect();
    let adjectives: Vec<&str> = include_str!("../adjectives.csv").split('\n').collect();

    println!("{}", generate_username(nouns, adjectives))
}

fn generate_username(nouns: Vec<&str>, adjectives: Vec<&str>) -> String {
    let mut rng = rand::thread_rng();

    let noun = &nouns[rng.gen_range(0..nouns.len())];
    let adjective = &adjectives[rng.gen_range(0..adjectives.len())];

    format!("{}_{}", adjective, noun)
}
