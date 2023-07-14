import { DataType } from '../interfaces';

export class LinkedList {
  private head: Nodo = {} as Nodo;
  private _length: number = 0;
  private tail: Nodo = {} as Nodo;

  /*constructor(
        private head:  null | Nodo,
        private _length: number,
        private tail: Nodo | null
        )
        {
            this.head = null;
            this._length = 0;
            this.tail = null
        }*/

  public insert(data: DataType): Boolean {
    const nodo = new Nodo(data, {} as Nodo);

    let current = this.head;

    if (Object.entries(this.head).length === 0) {
      this.head = nodo;
      this._length++;
      return true;
    }

    while (Object.entries(current['next']).length > 0) {
      current = current['next'];
    }

    current['next'] = nodo;
    this._length++;
    return true;
  }

  public deletion(query: string): Boolean | String {
    let current = this.head;

    if (Object.entries(this.head).length === 0)
      return 'No existe una lista aun';

    if (current) {
      if (
        current['data'].car_name === query ||
        current['data'].car_brand === query ||
        current['data'].car_category === query
      ) {
        if (current['next']) {
          this.head = current['next'];
          return 'Se borro el nodo seleccionado';
        }
        this.head = {} as Nodo;
        return 'Se borro la unica coincidencia que existia';
      }
    }

    while (!current['next']) {
      current = current['next'];

      if (
        current['data'].car_name === query ||
        current['data'].car_brand === query ||
        current['data'].car_category === query
      ) {
        current['next'] = current['next']['next']
          ? current['next']['next']
          : (current = {} as Nodo);
        return true;
      }
    }
    throw new Error('Sin coincidencias');
  }

  public searching(query: string): string | Nodo {
    let current: any = this.head;

    if (Object.entries(this.head).length === 0) return 'Sin coincidencias';

    if (current) {
      if (
        current['data'].car_name === query ||
        current['data'].car_brand === query ||
        current['data'].car_category === query
      ) {
        return current;
      }
    }

    while (!current['next']) {
      current = current['next'];

      if (
        current['data'].car_name === query ||
        current['data'].car_brand === query ||
        current['data'].car_category === query
      ) {
        return current;
      }
    }

    return 'Sin coincidencias';
  }
}

class Nodo {
  constructor(
    private data: DataType,
    private next: Nodo,
  ) {
    this.data = this.data;
    this.next = this.next;
  }
}
