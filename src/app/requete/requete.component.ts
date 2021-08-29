import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-requete',
  templateUrl: './requete.component.html',
  styleUrls: ['./requete.component.css']
})
export class RequeteComponent implements OnInit {

  // Exemple au plus simple de requete HTTP via API pleins de possibilités plus avancées sur le net !
  // Ne pas Oublier l'import du Module HttpClientModule dans le tableau des import dans notre app.module

// On instancie deux props / 2 exemples
test:any;
test2:any;

// On injecte le service HttpClient du HttpModule ( et pas l'inverse...)
  constructor(private http:HttpClient) { }

  ngOnInit(): void {


  // On request via GET on type ou non
  // On subscribe pour recevoir les data sinon LAZY LOADING ANGULAR 
  // On stock le retour de data dans notre variable de début
  // On fait ce qu'on veut avec nos datas ! FIN
  this.http.get<any>("https://reqres.in/api/users?page=2").subscribe( (data: any) => { this.test = data });


  // Dans le subscribe on peut (c'est mieux) mettre un 2eme param en cas erreur
  // Puis a nous de gerer ce qu'on fait ou non selon notre besoin
  this.test2 = this.http.get("https://reqres.in/api/users/23").subscribe(
    (data:any) => {console.log(data)} , 
      error => { console.log(error) }  //error.ok error.status ect ect
    );

  // this.test = this.http.get("https://reqres.in/api/users?page=2"); // Sans subscribe donc lazy on pas les datas requeté

  }




}
