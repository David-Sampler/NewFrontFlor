import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.scss']
})
export class VendasComponent implements OnInit {

  data = new Date();
  // Fri Nov 16 2018 18:36:40 GMT-0200 (Horário de Verão de Brasília)
  availableColors: any[] = [
    { name: 'none', color: undefined },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];

  form: any
  pagamentos: any = "Dinheiro"
  clientes: any
  Total: any = 0
  servFeitos: any = []


  foods: any[] = [
    { value: 'LETICIA' },
    { value: 'LUZIELE' },
    { value: 'CARLA' },
    { value: 'MAYARA' },
    { value: 'ANA PAULA' },

  ];

  constructor(private formulario: FormBuilder, private service: ServiceService,) {
    this.form = this.formulario.group({
      usuario: ['', Validators.required],
      cliente: ['', Validators.required],
      servico: this.formulario.group({
        tipo: ['', Validators.required],
        valor: ['', Validators.required]
      }),
      valor: ['', Validators.required],
      pagamento: [this.pagamentos]
    })
  }

  ngOnInit(): void {
    this.getCli()
  }

  getFormulario() {
    this.form = this.formulario.group({
      usuario: ['', Validators.required],
      cliente: ['', Validators.required],
      servico: this.formulario.group({
        tipo: ['', Validators.required],
        valor: ['', Validators.required]
      }),
      valor: ['', Validators.required],
      
    })
  }

  getCli() {
    this.service.getCliente().subscribe((res) => {
      this.clientes = res
      console.log(res)
    })
  }

  addServicos() {

    let serv = this.form.value.servico
    this.servFeitos.push(serv)
    this.Total += parseInt(serv.valor)

    console.log(this.Total)

  }
  delservico(index: any) {
    let d = this.servFeitos.splice(index, 1)
    this.Total -= d[0].valor
  }

  fazerVendas() {
    
    let data2 = new Date(this.data.valueOf() - this.data.getTimezoneOffset() * 60000);
    var dataBase = data2.toISOString().replace(/\.\d{3}Z$/, '');

    let dados = dataBase.split("T")
    let data = dados[0].split("-").reverse().join('-')
    let hora = dados[1]
    
    

    let formulario = {
      usuario: this.form.value.usuario,
      cliente: this.form.value.cliente,
      servico: this.servFeitos,
      totalVenda: this.Total,
      pagamento: this.form.value.pagamento,
      momento: {
        date: data,
        hora: hora
      }
    }
    console.log(this.form.value.usuario)


    this.service.Insertvendas(formulario).subscribe((res) => console.log(res))
    this.service.msg("Venda Realizada", "Obrigado", "left")
    this.getFormulario()
    this.limparCampos()
  }

  limparCampos() {
    this.form.reset()
    this.servFeitos = []
    this.Total = 0
   
  }
  


}
