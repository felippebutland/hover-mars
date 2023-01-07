import {Rover} from "../module/rover.js";
import { jest } from "@jest/globals";


const makeSut = () => {
    const sut = new Rover(5, 5);
    return { sut };
};

describe('rover', () => {
    describe('putPosition', () => {
        it('Put position Rover N', () => {
            const { sut } = makeSut();
            sut.putPosition(1,2,'N')
            expect(sut.facing).toEqual('N');
        })
        it('Put position Rover E', () => {
            const { sut } = makeSut();
            sut.putPosition(1,2,'E')
            expect(sut.facing).toEqual('E');
        })
        it('Put position Rover S', () => {
            const { sut } = makeSut();
            sut.putPosition(1,2,'S')
            expect(sut.facing).toEqual('S');
        })
        it('Put position Rover W', () => {
            const { sut } = makeSut();
            sut.putPosition(1,2,'W')
            expect(sut.facing).toEqual('W');
        })
    });
    describe('positionShow', () => {
            it('Direction by Facing 1', () => {
                const { sut } = makeSut();
                sut.facing = 1
                const str = sut.positionShow()
                expect(str).toEqual('0 0 1');
            })
            it('Direction by Facing 2', () => {
                const { sut } = makeSut();
                sut.facing = 2
                const str = sut.positionShow()
                expect(str).toEqual('0 0 2');
            })
            it('Direction by Facing 3', () => {
                const { sut } = makeSut();
                sut.facing = 3
                const str = sut.positionShow()
                expect(str).toEqual('0 0 3');
            })
            it('Direction by Facing 4', () => {
                const { sut } = makeSut();
                sut.facing = 4
                const str = sut.positionShow()
                expect(str).toEqual('0 0 4');
            })
    })
    describe('moveForward', () => {
        it('Test move in move up', () => {
            const facing = new Rover(5,5)
            facing.N = 1
            facing.moveForward()
            expect(facing.y).toEqual(1)
        })
        it('Test move in move right', () => {
            const facing = new Rover(5,5)
            facing.E = 1
            facing.moveForward()
            expect(facing.y).toEqual(1)
        })
        it('Test move in move down', () => {
            const facing = new Rover(5,5)
            facing.S = 1
            facing.moveForward()
            expect(facing.y).toEqual(1)
        })
        it('Test move in move left', () => {
            const facing = new Rover(5,5)
            facing.W = 1
            facing.moveForward()
            expect(facing.y).toEqual(1)
        })
    })
    describe('firstProcess()', () => {
        it('Test mars action left', () => {
            const facing = new Rover(5,5)
            const spy = jest.spyOn(facing, 'turnLeft')
            facing.processControl('L')
            expect(spy).toHaveBeenCalled()
        })
        it('Test mars action right', () => {
            const facing = new Rover(5,5)
            const spy = jest.spyOn(facing, 'turnRight')
            facing.processControl('R')
            expect(spy).toHaveBeenCalled()
        })
        it('Test mars action move', () => {
            const facing = new Rover(5,5)
            const spy = jest.spyOn(facing, 'moveForward')
            facing.processControl('M')
            expect(spy).toHaveBeenCalled()
        })
    })
})