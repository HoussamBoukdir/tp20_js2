class Etudiant{
    constructor(nom, age){
        this.nom=nom;
        this.age=age;
    }
    info(){
       // return "nom="+this.nom+" age="+this.age;
        return `nom=${this.nom} age=${this.age}`;
    }
}
class Stagiaire extends Etudiant{
    constructor(nom, age, stage){
        super(nom, age);
        this.stage=stage;
    }
    info(){
        return`Stagiaire ${super.info()} stage=${this.stage}`
    }
}