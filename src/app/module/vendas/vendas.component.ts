import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from 'src/app/service.service';
import { DetalhesVendasComponent } from './detalhes-vendas/detalhes-vendas.component'
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
  listaCli: any
  Total: any = 0
  servFeitos: any = []


  foods: any[] = [
    { value: 'LETICIA' },
    { value: 'LUZIELE' },
    { value: 'CARLA' },
    { value: 'MAYARA' },
    { value: 'LILI' },

  ];

  constructor(private formulario: FormBuilder, private service: ServiceService,) {
    this.form = this.formulario.group({
      usuario: ['', Validators.required],
      cliente: ['ANÔNIMO', Validators.required],
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
      let dado: any = []
      this.clientes.filter((result: any) => {
        dado.push(result.nome)
      }

      )
      this.listaCli = dado.sort()
    })
  }

  addServicos() {
    console.log(this.form.value)

    if (this.form.value.servico.valor === "") {
      this.service.msg('Você precisa adicionar o valor e o serviço', "Faço isso", 'right')
    }
    if (this.form.value.servico.tipo === "") {
      this.service.msg('Você precisa adicionar o valor e o serviço', "Faço isso", 'right')
    }

    else {
      let serv = this.form.value.servico
      this.servFeitos.push(serv)
      this.Total += parseInt(serv.valor)
      console.log(this.Total)
    }



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
      cliente: { nome: this.form.value.cliente },
      servico: this.servFeitos,
      totalVenda: this.Total,
      pagamento: this.form.value.pagamento,
      momento: {
        date: data,
        hora: hora
      }
    }
    console.log(formulario)



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


  todosVendas() {
    this.service.openDialog(DetalhesVendasComponent)

  }
}
