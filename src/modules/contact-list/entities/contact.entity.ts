export class Contact {
  public id: string;

  public name: string;

  public phone: string;

  constructor(contact: any = {}) {
    this.id = this.generateUuid();
    this.name = contact.name;
    this.phone = contact.phone;
  }

  private generateUuid(): string {
    return Math.random().toString(36).substring(2, 15);
  }
}
