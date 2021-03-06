import { Component, OnInit } from '@angular/core';
import { BlockchainService } from 'src/app/services/blockchain.service';


@Component({
  	selector: 'app-blockchain-viewer',
  	templateUrl: './blockchain-viewer.component.html',
  	styleUrls: ['./blockchain-viewer.component.scss']
})
export class BlockchainViewerComponent implements OnInit {
	public blocks = [];
	public selectedBlock = null;
	// dependency injection
    constructor(private blockchainService: BlockchainService) { 
    	// saves in blocks array the totalblocks of chain
    	this.blocks = blockchainService.getBlocks();
    	this.selectedBlock = this.blocks[0];
  	}


  	showTransactions(block) {
  		this.selectedBlock = block;
  	}
  	
  	ngOnInit() {
  	}

}
