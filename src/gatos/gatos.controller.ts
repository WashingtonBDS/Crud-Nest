import { Gato } from './gato/gato';
import { GatosService } from './gatos.service';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('gatos')
export class GatosController {
    constructor(
        private readonly gatosService: GatosService
    ) { }
    
    @Get()
    async listarTodos(): Promise<Gato[]> {
        return this.gatosService.listarTodos();
    }
    @Post()
    async criar(@Body() gato: Gato): Promise<Gato> {
        return this.gatosService.criar(gato);
    }

    @Get(':id')
    async buscarPorId(@Param('id') id: string): Promise<Gato> {
        return this.gatosService.buscarPorId(id); 
    }
    
    @Put(':id')
    async atulizar(@Param('id') id: string, @Body() gatosAtualizado: Gato): Promise<Gato> {
        return this.gatosService.atualizar(id, gatosAtualizado);
    }

    @Delete(':id')
    async remover(@Param('id') id: string): Promise<Gato> {
        return this.gatosService.remover(id);
    }
}
