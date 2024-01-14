// CheckboxManager.tsx
type CheckboxChangeCallback = (checkedCheckboxes: string[]) => void;

export class CheckboxManager {
  public checkboxContainer: HTMLDivElement;
  public checkboxNames: string[] = ['Breakfast', 'Lunch', 'Dinner', 'Snack', 'Brunch', 'Keto', 'Vegan', 'Dairy-free', 'High-protein', 'Quick'];
  public checkboxes: HTMLInputElement[];
  private checkboxChangeCallback: CheckboxChangeCallback | null = null;

  constructor() {
    this.checkboxContainer = document.createElement('div');
    this.checkboxContainer.id = 'checkboxContainer';

    this.checkboxes = [];

    this.createCheckboxes();
    this.setupEventListeners();
  }

  private createCheckboxes() {
    this.checkboxNames.forEach((name, index) => {
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = `checkbox${index + 1}`;

      const label = document.createElement('label');
      label.appendChild(checkbox);
      label.appendChild(document.createTextNode(` ${name}`));

      this.checkboxContainer.appendChild(label);

      this.checkboxes.push(checkbox);
    });
  }

  private setupEventListeners() {
    this.checkboxes.forEach((checkbox) => {
      checkbox.addEventListener('change', this.handleCheckboxChange.bind(this));
    });
  }

  private handleCheckboxChange(event: Event) {
    const targetCheckbox = event.target as HTMLInputElement;

    if (this.checkboxChangeCallback) {
      this.checkboxChangeCallback(this.getCheckedCheckboxNames());
    }
  }

  // Method to get the list of checked checkbox names
    public getCheckedCheckboxNames(): string[] {
      return this.checkboxes
      .filter((checkbox) => checkbox.checked)
      .map((checkbox) => {
        const label = checkbox.parentElement?.textContent;
        // Extract the name directly after the checkbox
        const name = label?.substring(label.indexOf(' ') + 1);
        return name || '';
      });
    }

  // Set a callback function to be notified when checkboxes change
  public setCheckboxChangeCallback(callback: CheckboxChangeCallback) {
    this.checkboxChangeCallback = callback;
  }
}
