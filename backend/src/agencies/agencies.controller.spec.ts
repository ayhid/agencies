import { AgenciesController } from './agencies.controller';
import { AgenciesService } from './agencies.service';

describe('AgenciesController', () => {
  let agenciesController: AgenciesController;
  let agenciesService: AgenciesService;

  beforeEach(() => {
    agenciesService = new AgenciesService();
    agenciesController = new AgenciesController(agenciesService);
  });

  describe('findAll', () => {
    it('should return an array of agencies', async () => {
      const result = [
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
      ];
      jest.spyOn(agenciesService, 'findAll').mockImplementation(() => result);

      expect(await agenciesController.findAll()).toBe(result);
    });
  });
});
