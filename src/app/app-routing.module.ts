import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NouveauCltFrsComponent } from './composants/nouveau-clt-frs/nouveau-clt-frs.component';
import { NouvelleCmdCltFrsComponent } from './composants/nouvelle-cmd-clt-frs/nouvelle-cmd-clt-frs.component';
import { NouvelArticleComponent } from './pages/articles/nouvel-article/nouvel-article.component';
import { PageArticleComponent } from './pages/articles/page-article/page-article.component';
import { NouvelleCategoryComponent } from './pages/categories/nouvelle-category/nouvelle-category.component';
import { PageCategorieComponent } from './pages/categories/page-categorie/page-categorie.component';
import { PageClientComponent } from './pages/client/page-client/page-client.component';
import { PageFournisseurComponent } from './pages/fournisseur/page-fournisseur/page-fournisseur.component';
import { MvtstkComponent } from './pages/mvtstk/page-mvtstk/mvtstk.component';
import { PageCmdCltFrsComponent } from './pages/page-cmd-clt-frs/page-cmd-clt-frs.component';
import { PageDashboardComponent } from './pages/page-dashboard/page-dashboard.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageStatistiquesComponent } from './pages/page-statistiques/page-statistiques.component';
import { ChangerMotDePasseComponent } from './pages/profil/changer-mot-de-passe/changer-mot-de-passe.component';
import { PageProfilComponent } from './pages/profil/page-profil/page-profil.component';
import { NouvelUtilisateurComponent } from './pages/utilisateur/nouvel-utilisateur/nouvel-utilisateur.component';
import { PageUtilisateurComponent } from './pages/utilisateur/page-utilisateur/page-utilisateur.component';
import { ApplicationGuardService } from './services/guard/application-guard.service';

const routes: Routes = [
  {path :'login',component: PageLoginComponent },
  {path :'inscrire',component: PageInscriptionComponent },
  {path :'',component: PageDashboardComponent,
  canActivate:[ApplicationGuardService],
    children:[
              {
                path:'statistiques',component:PageStatistiquesComponent,
                canActivate:[ApplicationGuardService]
              },

              /**Article */
              {
                path:'articles',component:PageArticleComponent,
                canActivate:[ApplicationGuardService]
              },
              {
                path:'nouvelarticle',component:NouvelArticleComponent,
                canActivate:[ApplicationGuardService]
              },
              {
                path:'nouvelarticle/:idArticle',component:NouvelArticleComponent,
                canActivate:[ApplicationGuardService]
              },

              /** mouvement de stock */
              {
                path:'mvtstk',component:MvtstkComponent,
                canActivate:[ApplicationGuardService]
              },
              /* Client */
              {
                path:'clients',component:PageClientComponent,
                canActivate:[ApplicationGuardService]
              },
              {
                path:'nouveauclient',component:NouveauCltFrsComponent,
                data:{origin:'client'},
                canActivate:[ApplicationGuardService]
              },
              {
                path:'commandeclient',component:PageCmdCltFrsComponent,
                data:{origin:'client'},
                canActivate:[ApplicationGuardService]
 
              },
              {
                path:'nouvellecommandeclt',component:NouvelleCmdCltFrsComponent,
                data:{origin:'client'},
                canActivate:[ApplicationGuardService]  
              },
              /* fournisseur */
              {
                path:'fournisseurs',component:PageFournisseurComponent,
                canActivate:[ApplicationGuardService]
              },
              {
                path:'nouveaufournisseur',component:NouveauCltFrsComponent,
                data:{origin:'fournisseur'},
                canActivate:[ApplicationGuardService]
              
              },
              {
                path:'commandefournisseur',component:PageCmdCltFrsComponent,
                data:{origin:'fournisseur'},
                canActivate:[ApplicationGuardService]
  
              },
              {
                path:'nouvellecommandefrs',component:NouvelleCmdCltFrsComponent,
                data:{origin:'fournisseur'} ,
                canActivate:[ApplicationGuardService]
 
              },

              /** Categories */
              {
                path:'categories',component:PageCategorieComponent,
                canActivate:[ApplicationGuardService]
              },
              {
                path:'nouvellecategorie',component:NouvelleCategoryComponent,
                canActivate:[ApplicationGuardService]
              },
              {
                path:'nouvellecategorie/:idCategory',component:NouvelleCategoryComponent,
                canActivate:[ApplicationGuardService]
              },

              {
                path:'utilisateurs',component:PageUtilisateurComponent,
                canActivate:[ApplicationGuardService]
              },
              {
                path:'nouvelutilisateur',component:NouvelUtilisateurComponent,
                canActivate:[ApplicationGuardService]
              },

              {
                path:'profil',component:PageProfilComponent,
                canActivate:[ApplicationGuardService]
              },
              {
                path:'changermotdepasse',component:ChangerMotDePasseComponent,
                canActivate:[ApplicationGuardService]
              },



            ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
