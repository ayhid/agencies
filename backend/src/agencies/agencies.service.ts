import { Injectable } from '@nestjs/common';
import { Agency } from './interfaces/agency.interface';
@Injectable()
export class AgenciesService {
  private readonly agencies: Agency[] = [
    {
      name: 'Agence Paris Opera',
      manager: 'Philipe Dayan',
      activity: 'Electrique',
    },
    {
      name: 'Agence Paris Madeleine',
      manager: 'Adel Chibane',
      activity: 'Electrique',
    },
    {
      name: 'Agence Strasbourg',
      manager: 'Bruno Brassard',
      activity: 'Climatisation',
    },
    {
      name: 'Agence Marseille',
      manager: 'Gilbert Sanchez',
      activity: 'Plomberie',
    },
    {
      name: 'Agence Strasbourg',
      manager: 'Élia Benoit',
      activity: 'Climatisation',
    },
    {
      name: 'Fleury GIE',
      manager: 'Julie Vidal',
      activity: 'Climatisation',
    },
    {
      name: 'André, Gauthier SARL',
      manager: 'Aloïse Aubert',
      activity: 'Electrique',
    },
    {
      name: 'Collet EURL',
      manager: 'Judith Aubry',
      activity: 'Plomberie',
    },
  ];
  findAll(): Agency[] {
    return this.agencies;
  }
}
