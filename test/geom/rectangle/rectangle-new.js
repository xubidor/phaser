import test from 'ava';
import 'babel-core/register';
import Rectangle from '../../../src/geom/rectangle/Rectangle.js'

test('Rectangle', t => {

    let r = new Rectangle();

    t.plan(4);
    t.is(r.x, 0);
    t.is(r.y, 0);
    t.is(r.width, 0);
    t.is(r.height, 0);
    
});

test('Rectangle', t => {

    let r = new Rectangle(0, 0, 128, 256);

    t.plan(4);
    t.is(r.x, 0);
    t.is(r.y, 0);
    t.is(r.width, 128);
    t.is(r.height, 256);
    
});

test('Rectangle', t => {

    let r = new Rectangle(-256, -128, 512, 512);

    t.plan(4);
    t.is(r.x, -256);
    t.is(r.y, -128);
    t.is(r.width, 512);
    t.is(r.height, 512);
    
});
