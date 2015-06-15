"use strict";

import {MutantGeneratorData, GetResult} from './MutantGeneratorData';
import $ from 'jQuery';

function init(){
	getLimbs();
	getSize();
	getType();
	getShape();
}

function getLimbs(){
	var limbs = GetResult(MutantGeneratorData.limbs);
	$('.limbs').html(limbs.resultText);
}
function getSize(){
	var size = GetResult(MutantGeneratorData.size);
	$('.size').html(size.resultText);
	$('.stat-sty-name').html(size.stat.type.name);
	$('.stat-sty-value').html(size.stat.value);
}
function getType(){
	var type = GetResult(MutantGeneratorData.type);
	$('.type').html(type.resultText);
	$('.stat-kyl-name').html(type.stat.type.name);
	$('.stat-kyl-value').html(type.stat.value);
}
function getShape(){
	var shape = GetResult(MutantGeneratorData.shape);
	$('.shape').html(shape.resultText);
}

init();