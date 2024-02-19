/*
Copyright (C) 2023 Conor Morgan
This file is part of ACC Tooklit, which is free software: you can 
redistribute it and/or modify it under the terms of the 
GNU General Public License as published by the Free Software Foundation,
either version 3 of the License, or (at your option) any later version.

ACC Tooklit is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

import { Cars, CupCategories, DriverCategories, SessionTypes } from '@/lib/gameData'
import type { SelectOption } from 'bootstrap-vue-next'

export function useGameData() {
  //#region Session types
  function sessionTypeOptions() {
    const result = [] as SelectOption[]
    for (const item of SessionTypes) {
      result.push({
        text: item.name,
        value: item.value,
      })
    }
    return result
  }
  //#endregion Session types

  //#region Cup categories
  function cupCategoryOptions() {
    const result = [] as SelectOption[]
    for (const item of CupCategories) {
      result.push({
        text: item.name,
        value: item.value,
      })
    }
    return result
  }
  //#endregion Cup categories

  //#region Driver categories
  function driverCategoryOptions() {
    const result = [
      {
        text: 'No category',
        value: '',
      },
    ] as SelectOption[]
    for (const item of DriverCategories) {
      result.push({
        text: item.name,
        value: item.value,
      })
    }
    return result
  }
  function driverCategoryOptionsShort() {
    const result = [
      {
        text: '-',
        value: '',
      },
    ] as SelectOption[]
    for (const item of DriverCategories) {
      result.push({
        text: item.short,
        value: item.value,
      })
    }
    return result
  }
  //#endregion Driver categories

  //#region Cars
  function carOptions() {
    const result = [
      {
        text: 'Any car',
        value: -1,
      },
    ] as SelectOption[]
    for (const item of Cars) {
      result.push({
        text: item.name,
        value: item.value,
      })
    }
    return result
  }
  //#endregion Cars

  //#region Tracks
  //#endregion Tracks

  return { sessionTypeOptions, cupCategoryOptions, driverCategoryOptions, driverCategoryOptionsShort, carOptions }
}
