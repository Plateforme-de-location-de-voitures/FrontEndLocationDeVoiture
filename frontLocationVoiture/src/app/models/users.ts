// class role.model.ts
export class Role {
  id?: number;
  code: string;
  libelle: string;

  constructor() {
    this.code = '';
    this.libelle = '';
  }
}

// class personne.model.ts
export class Personne {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  role: Role;

  constructor() {
    this.nom = '';
    this.prenom = '';
    this.email = '';
    this.telephone = '';
    this.role = new Role();
  }
}

// class proprietaire.model.ts
export class Proprietaire extends Personne {
  constructor() {
    super();
  }
}

// class client.model.ts
export class Client extends Personne {
  constructor() {
    super();
  }
}
