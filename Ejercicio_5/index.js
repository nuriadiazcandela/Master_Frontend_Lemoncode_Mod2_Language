// 5. Slot Machine
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.

// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:

class SlothMachine {
  constructor(slots = 3, coins = 0) {
    this.slots = slots;
    this.coins = coins;
  }

  generateRandomSlot() {
    return Math.random() > 0.5;
  }

  generateRandomSlots() {
    const randomSlots = [];
    for (let i = 0; i < this.slots; i++) {
      randomSlots.push(this.generateRandomSlot());
    }
    return randomSlots;
  }

  reset() {
    this.coins = 0;
  }

  play() {
    this.coins++;
    const randomSlots = this.generateRandomSlots();

    const isUserWins = randomSlots.every((slot) => Boolean(slot));

    if (isUserWins) {
      console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
      this.reset();
      return true;
    }

    console.log('Good luck next time!!');
    return false;
  }
}

const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
