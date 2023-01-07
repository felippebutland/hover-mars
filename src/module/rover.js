export class Rover {
    constructor() {
        this.directions = ['N', 'E', 'S', 'W'];
        this.x = 0;
        this.y = 0;
        this.facing = 'N';
    }

    putPosition(x, y, dir) {
        this.x = x;
        this.y = y;
        this.facing = dir;
    }

    positionShow() {
        return `${this.x} ${this.y} ${this.facing}`;
    }

    turnLeft() {
        const currentIndex = this.directions.indexOf(this.facing);
        this.facing = currentIndex === 0 ? this.directions[3] : this.directions[currentIndex - 1];
    }

    turnRight() {
        const currentIndex = this.directions.indexOf(this.facing);
        this.facing = currentIndex === 3 ? this.directions[0] : this.directions[currentIndex + 1];
    }

    moveForward() {
        if (this.facing === 'N') {
            this.y++;
        } else if (this.facing === 'E') {
            this.x++;
        } else if (this.facing === 'S') {
            this.y--;
        } else if (this.facing === 'W') {
            this.x--;
        }
    }

    run(controls) {
        for (const element of controls) {
            this.processControl(element);
        }
    }

    processControl(control) {
        switch (control) {
            case 'L':
                this.turnLeft();
                break;
            case 'R':
                this.turnRight();
                break;
            case 'M':
                this.moveForward();
                break;
            default:
                throw new Error('Invalid input');
        }
    }
}