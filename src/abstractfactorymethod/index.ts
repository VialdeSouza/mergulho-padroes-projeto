// Passo 1: Criar interface para cada objeto



interface Chair {
  hasLegs(): void;
  sitOn(): void;
}

interface CoffeeTable {
  hasTray(): void;
  setTableLegs(qnt: number): void;
}

interface Sofa {
  setIsRetratil(isRt: boolean): boolean;
  setQntEspacos(qnt: number): void;
}

// Criar a fabrica abstrada

abstract class FurnitureFactory {
  abstract createChair(): Chair;
  abstract createCoffeeTable(): CoffeeTable;
  abstract createSofa(): Sofa;
}

class ModernChair implements Chair {
  legs = 0;
  hasLegs(): void {
    this.legs = 1;
  }

  sitOn(): void {
    console.log("Desenhar os assentos");
  }
}

class ModernCoffeeTable implements CoffeeTable {
  hasTray(): void {
    console.log("Desenhando tampa da mesa");
  }

  setTableLegs(qnt: number): void {
    console.log("Sem pés");
  }
}

class ModernSofa implements Sofa {
  setIsRetratil(isRt: boolean): boolean {
    return false;
  }
  setQntEspacos(qnt: number): void {
    console.log("Construindo os Espaços");
  }
}

//Criar a classe fabrica baseada na classe abstrata

class ModernFurnitureFactory extends FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }

  createCoffeeTable(): CoffeeTable {
    return new ModernCoffeeTable();
  }

  createSofa(): Sofa {
    return new ModernSofa();
  }
}

