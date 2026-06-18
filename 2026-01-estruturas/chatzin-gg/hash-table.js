export class HashTable {
  constructor(size) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  get(key) {
    let hash = this._hash(key);
    console.log("na mesa " + hash);
    if (!this.keyMap[hash]) {
      return null;
    }

    for (let indice = 0; indice < this.keyMap[indice].length; indice++) {
      if (this.keyMap[hash][indice]) {
        return this.keyMap[hash][indice][1];
      }
    }
  }

  set(key, value) {
    const hash = this._hash(key);
    if (!this.keyMap[hash]) {
      this.keyMap[hash] = [];
    }

    for (let par of this.keyMap[hash]) {
      if (par[0] == key) {
        par[1] = value;
        return;
      }
    }
    this.keyMap[hash].push([key, value]);
  }
}

/*
const mesas = new HashTable(7);

mesas.set("mouse", "objeto mouse");
mesas.set("mousepad", "objeto mousepad");
mesas.set("canetão", "objeto canetão");
mesas.set("chave", "objeto chave");
mesas.set("motoserra", "objeto motoserraelétrica");

console.log(mesas.get("motoserra"));
*/
