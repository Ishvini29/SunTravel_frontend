import { Component,OnInit  } from '@angular/core';
import { ContractService } from '../../service/contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrl: './contract.component.css'
})
export class ContractComponent implements OnInit{
  contracts:any=[];
  constructor(private contractService: ContractService) {}

  ngOnInit(): void {
    this.getAllContract();
  }

  getAllContract(){
    this.contractService.getAllContract().subscribe((res)=>{
      console.log(res);
      this.contracts=res;
      
    })}
}
