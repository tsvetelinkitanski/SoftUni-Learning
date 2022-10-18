class VegetableStore {
    constructor(owner, location) {
      this.owner = owner;
      this.location = location;
      this.availableProducts = [];
    }
   
    loadingVegetables(vegetables) {
      let splittedVegetables = [];
      for (const vegetable of vegetables) {
        splittedVegetables.push(vegetable);
      }
      splittedVegetables.forEach((el) => {
        let [type, quantity, price] = el.split(" ");
        let currVege = this.availableProducts.find((v) => v.type === type);
   
        if (!currVege) {
          this.availableProducts.push({
            type,
            quantity: Number(quantity),
            price: Number(price),
          });
        } else {
          if (currVege.type === type) {
            currVege.quantity += Number(quantity);
            if (currVege.price < Number(price)) {
              currVege.price = Number(price);
            }
          }
        }
      });
      let buff = [];
      this.availableProducts.forEach((el) => {
        buff.push(el.type);
      });
      return `Successfully added ${buff.join(", ")}`;
    }
    buyingVegetables(selectedProducts) {
      let totalValue = 0;
      let splittedVegetables = [];
      let buff = [];
      for (const product of selectedProducts) {
        splittedVegetables.push(product);
      }
      splittedVegetables.forEach((el) => {
        let purchases = 0;
        let [type, quantity] = el.split(" ");
        let currVege = this.availableProducts.find((v) => v.type === type);
        if (!currVege) {
          throw new Error(
            `${type} is not available in the store, your current bill is $${totalValue.toFixed(
              2
            )}.`
          );
        }
        if (currVege.quantity < Number(quantity)) {
          throw new Error(
            `The quantity ${quantity} for the vegetable ${
              currVege.type
            } is not available in the store, your current bill is $${totalValue.toFixed(
              2
            )}.`
          );
        }
        purchases = currVege.price * Number(quantity);
        currVege.quantity -= Number(quantity);
        totalValue += purchases;
      });
      return `Great choice! You must pay the following amount $${totalValue.toFixed(
        2
      )}.`;
    }
    rottingVegetable(type, quantity) {
      quantity = Number(quantity);
      let currVege = this.availableProducts.find((v) => v.type === type);
      if (!currVege) {
        throw new Error(`${type} is not available in the store.`);
      }
      if (quantity > currVege.quantity) {
        currVege.quantity = 0;
        return `The entire quantity of the ${type} has been removed.`;
      }
      currVege.quantity -= quantity;
      return `Some quantity of the ${type} has been removed.`;
    }
    revision() {
      let buff = [];
      buff.push("Available vegetables:");
      this.availableProducts
        .sort((a, b) => a.price - b.price)
        .forEach((prod) => {
          buff.push(`${prod.type}-${prod.quantity}-$${prod.price}`);
        });
      buff.push(
        `The owner of the store is ${this.owner}, and the location is ${this.location}.`
      );
      return buff.join("\n");
    }
  }
   
   
  let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
   
  console.log(
    vegStore.loadingVegetables([
      "Okra 2.5 3.5",
      "Beans 10 2.8",
      "Celery 5.5 2.2",
      "Celery 0.5 2.5",
    ])
  );
   
  console.log(vegStore.rottingVegetable("Okra", 1));
  console.log(vegStore.rottingVegetable("Okra", 2.5));
   
  console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
   
  console.log(vegStore.revision());
   
  // , "Successfully added Okra, Beans, Celery"
   
  // , "Some quantity of the Okra has been removed."
   
  // , "The entire quantity of the Okra has been removed."
   
  // , "Great choice! You must pay the following amount $26.15.")
   
  // ,`Available vegetables:
  // Celery-4.5-$2.5
  // Beans-2-$2.8
  // Okra-0-$3.5
  // // The owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.`);
   