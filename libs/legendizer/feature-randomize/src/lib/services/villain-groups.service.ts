import { Injectable } from '@angular/core';
import { BaseDataService } from "./base-data-service";
import { LegendaryVillainGroups, DarkCityVillainGroups } from "@legendizer/shared/villainGroup/data";
import { IVillainGroup } from '@legendizer/shared/villainGroup/types';


@Injectable({
  providedIn: 'root'
})
export class VillainGroupsService extends BaseDataService<IVillainGroup> {

  constructor() {
    super([
      ...Object.values(LegendaryVillainGroups),
      ...Object.values(DarkCityVillainGroups)
    ]);
  }
}
