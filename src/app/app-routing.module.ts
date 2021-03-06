import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlockchainViewerComponent } from './pages/blockchain-viewer/blockchain-viewer.component';
import { BlockViewComponent } from './components/block-view/block-view.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { FormsModule } from 'node_modules/@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateTransactionComponent } from 'src/app/pages/create-transaction/create-transaction.component';
import { PendingTransactionsComponent } from './pages/pending-transactions/pending-transactions.component';
import { WalletComponent } from 'src/app/pages/wallet/wallet.component';
import { AboutUsComponent } from 'src/app/pages/about-us/about-us.component';
import { ShamirSecretsComponent } from 'src/app/pages/shamir-secrets/shamir-secrets.component';

const routes: Routes = [
{ path: '', component: BlockchainViewerComponent },
{ path: 'blockView', component: BlockViewComponent },
{ path: 'settings', component: SettingsComponent },
{ path: 'createTransaction', component: CreateTransactionComponent },
{ path: 'miningBlock', component: PendingTransactionsComponent },
{ path: 'balance', component: WalletComponent },
{ path: 'about', component: AboutUsComponent },
{ path: 'shamirSecretSharing', component: ShamirSecretsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
