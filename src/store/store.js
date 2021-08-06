import Vue from 'vue';
import Vuex from 'vuex';

import { mainDataStore } from './data.js';
// import { getInitialData } from './loadInitialData.js';
import * as actions from './actions';
import * as mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
	    baseValues: [{
	    	bodyFontSize: mainDataStore.bodyFontSize,
    		bodyLineHeight: mainDataStore.bodyLineHeight,
    		bodyLineHeightList: mainDataStore.bodyLineHeightList,
    		scalingRatio: mainDataStore.scalingRatio,
    		defaultGutter: mainDataStore.defaultGutterSelector,
    		defaultPadding: mainDataStore.defaultPaddingSelector,
    		containerWidth: mainDataStore.containerWidth,
    	}],
    	// baseValues: mainDataStore.baseValues,
    	verticalRhythmValues: [{
			displayFontSize: mainDataStore.displayFontSize,
			displayLineHeight: mainDataStore.displayLineHeight,
			displayMarginBottom: mainDataStore.displayMarginBottom,

			h1FontSize: mainDataStore.h1FontSize,
			h1LineHeight: mainDataStore.h1LineHeight,
			h1MarginBottom: mainDataStore.h1MarginBottom,

			h2FontSize: mainDataStore.h2FontSize,
			h2LineHeight: mainDataStore.h2LineHeight,
			h2MarginBottom: mainDataStore.h2MarginBottom,

			h3FontSize: mainDataStore.h3FontSize,
			h3LineHeight: mainDataStore.h3LineHeight,
			h3MarginBottom: mainDataStore.h3MarginBottom,

			h4FontSize: mainDataStore.h4FontSize,
			h4LineHeight: mainDataStore.h4LineHeight,
			h4MarginBottom: mainDataStore.h4MarginBottom,

			h5FontSize: mainDataStore.h5FontSize,
			h5LineHeight: mainDataStore.h5LineHeight,
			h5MarginBottom: mainDataStore.h5MarginBottom,

			bodyLgFontSize: mainDataStore.bodyLgFontSize,
			bodyLgLineHeight: mainDataStore.bodyLgLineHeight,
			bodyLgMarginBottom: mainDataStore.bodyLgMarginBottom,

			captionFontSize: mainDataStore.captionFontSize,
			captionLineHeight: mainDataStore.captionLineHeight,
			captionMarginBottom: mainDataStore.captionMarginBottom,

			labelFontSize: mainDataStore.labelFontSize,
			labelLineHeight: mainDataStore.labelLineHeight,
			labelMarginBottom: mainDataStore.labelMarginBottom,

			microFontSize: mainDataStore.microFontSize,
			microLineHeight: mainDataStore.microLineHeight,
			microMarginBottom: mainDataStore.microMarginBottom,
    	}],
    	typeSettings: [{
	    	enableFontSmoothing: mainDataStore.enableFontSmoothing,

			displayFontWeight: 600,
			displayFontStyle: "normal",
			displayTextTransform: "initial",
			displayLetterSpacing: "initial",

			h1FontWeight: 600,
			h1FontStyle: "normal",
			h1TextTransform: "initial",
			h1LetterSpacing: "initial",

			h2FontWeight: 600,
			h2FontStyle: "normal",
			h2TextTransform: "initial",
			h2LetterSpacing: "initial",

			h3FontWeight: 600,
			h3FontStyle: "normal",
			h3TextTransform: "initial",
			h3LetterSpacing: "initial",

			h4FontWeight: 600,
			h4FontStyle: "normal",
			h4TextTransform: "initial",
			h4LetterSpacing: "initial",

			h5FontWeight: 600,
			h5FontStyle: "normal",
			h5TextTransform: "initial",
			h5LetterSpacing: "initial",

			bodyLgFontWeight: 400,
			bodyLgFontStyle: "normal",
			bodyLgTextTransform: "initial",
			bodyLgLetterSpacing: "initial",

			captionFontWeight: 400,
			captionFontStyle: "normal",
			captionTextTransform: "initial",
			captionLetterSpacing: "initial",

			labelFontWeight: 400,
			labelFontStyle: "normal",
			labelTextTransform: "initial",
			labelLetterSpacing: "<initi></initi>al",

			microFontWeight: 400,
			microFontStyle: "normal",
			microTextTransform: "initial",
			microLetterSpacing: "initial",
    	}],
    	breakpoints: [{
    		breakpointPhoneLandscape: 415,
			breakpointTabletPortrait: 740,
			breakpointTabletLandscape: 1020,
			breakpointLaptop: 1200,
			breakpointDesktop: 1440,
			breakpointDesktopLg: 1400,
    	}],
    	gridSettings: [{
    		applyCssGrid: true,
	    	pageGridColumnsPhoneLandscape: '1fr 1fr 1fr 1fr',
			pageGridColumnsTabletPortrait: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
			pageGridColumnsTabletLandscape: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
			pageGridColumnsLaptop: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
			pageGridColumnsDesktop: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    	}],
		availableScales: [
			{ id: 1, value: '1.067', ratio: '15:16', name: 'minor second' },
			{ id: 2, value: '1.125', ratio: '8:9', name: 'major second' },
			{ id: 3, value: '1.2', ratio: '5:6', name: 'minor third' },
			{ id: 4, value: '1.25', ratio: '4:5', name: 'major third' },
			{ id: 5, value: '1.333', ratio: '3:4', name: 'perfect fourth' },
			{ id: 6, value: '1.414', ratio: '1:√2', name: 'aug. fourth / dim. fifth' },
			{ id: 7, value: '1.5', ratio: '2:3', name: 'perfect fifth' },
			{ id: 8, value: '1.6', ratio: '5:8', name: 'minor sixth' },
			{ id: 9, value: '1.618', ratio: '1:1.618', name: 'golden section' },
			{ id: 10, value: '1.667', ratio: '3:5', name: 'major sixth' },
			{ id: 11, value: '1.778', ratio: '9:16', name: 'minor seventh' },
			{ id: 12, value: '1.875', ratio: '8:15', name: 'major seventh' },
			{ id: 13, value: '2', ratio: '1:2', name: 'octave' },
			{ id: 14, value: '2.5', ratio: '2:5', name: 'major tenth' },
			{ id: 15, value: '2.667', ratio: '3:8', name: 'major eleventh' },
			{ id: 16, value: '3', ratio: '1:3', name: 'major twelfth' },
			{ id: 17, value: '4', ratio: '1:4', name: 'double octave' }
		],
		modules: [{
	    	resetCSS: true,
    	}],
	},
	actions,
	mutations,
	getters: {
		baseValues: state => {
			var baseValues = state.baseValues.map(baseValue => {
		        return {
					// bodyFontSize: baseValue.bodyFontSize + 'px',
					bodyFontSize: baseValue.bodyFontSize,
					bodyLineHeight: baseValue.bodyLineHeight,
					scalingRatio: baseValue.scalingRatio,
					defaultGutter: baseValue.defaultGutter,
					defaultPadding: baseValue.defaultPadding,
		        }
		    });
			// setTimeout(function(){ return baseValues  }, 1500);
		},
		verticalRhythmValues: state => {
			var verticalRhythmValues = state.verticalRhythmValues.map(verticalRhythmValue => {
		        return {
					displayFontSize: verticalRhythmValue.displayFontSize,
					displayLineHeight: verticalRhythmValue.displayLineHeight,
					displayMarginBottom: verticalRhythmValue.displayMarginBottom,

					h1FontSize: verticalRhythmValue.h1FontSize,
					h1LineHeight: verticalRhythmValue.h1LineHeight,
					h1MarginBottom: verticalRhythmValue.h1MarginBottom,

					h2FontSize: verticalRhythmValue.h2FontSize,
					h2LineHeight: verticalRhythmValue.h2LineHeight,
					h2MarginBottom: verticalRhythmValue.h2MarginBottom,

					h3FontSize: verticalRhythmValue.h3FontSize,
					h3LineHeight: verticalRhythmValue.h3LineHeight,
					h3MarginBottom: verticalRhythmValue.h3MarginBottom,

					h4FontSize: verticalRhythmValue.h4FontSize,
					h4LineHeight: verticalRhythmValue.h4LineHeight,
					h4MarginBottom: verticalRhythmValue.h4MarginBottom,

					h5FontSize: verticalRhythmValue.h5FontSize,
					h5LineHeight: verticalRhythmValue.h5LineHeight,
					h5MarginBottom: verticalRhythmValue.h5MarginBottom,

					bodyLgFontSize: verticalRhythmValue.bodyLgFontSize,
					bodyLgLineHeight: verticalRhythmValue.bodyLgLineHeight,
					bodyLgMarginBottom: verticalRhythmValue.bodyLgMarginBottom,

					captionFontSize: verticalRhythmValue.captionFontSize,
					captionLineHeight: verticalRhythmValue.captionLineHeight,
					captionMarginBottom: verticalRhythmValue.captionMarginBottom,

					labelFontSize: verticalRhythmValue.labelFontSize,
					labelLineHeight: verticalRhythmValue.labelLineHeight,
					labelMarginBottom: verticalRhythmValue.labelMarginBottom,

					microFontSize: verticalRhythmValue.microFontSize,
					microLineHeight: verticalRhythmValue.microLineHeight,
					microMarginBottom: verticalRhythmValue.microMarginBottom,
		        }
		    });
			return verticalRhythmValues;
		},
		typeSettings: state => {
			var typeSettings = state.typeSettings.map(typeSetting => {
		        return {
					enableFontSmoothing: typeSetting.enableFontSmoothing,
		        }
		    });
			return typeSettings;
		},
		breakpoints: state => {
			var breakpoints = state.breakpoints.map(breakpoint => {
		        return {
					breakpointPhoneLandscape: breakpoint.breakpointPhoneLandscape,
					breakpointTabletPortrait: breakpoint.breakpointTabletPortrait,
					breakpointTabletLandscape: breakpoint.breakpointTabletLandscape,
					breakpointLaptop: breakpoint.breakpointLaptop,
					breakpointDesktop: breakpoint.breakpointDesktop,
					breakpointDesktopLg: breakpoint.breakpointDesktopLg,
		        }
		    });
			return breakpoints;
		},
		gridSettings: state => {
			var gridSettings = state.gridSettings.map(gridSetting => {
		        return {
					applyCssGrid: gridSetting.applyCssGrid,
					pageGridColumnsPhoneLandscape: gridSetting.pageGridColumnsPhoneLandscape,
					pageGridColumnsTabletPortrait: gridSetting.pageGridColumnsTabletPortrait,
					pageGridColumnsTabletLandscape: gridSetting.pageGridColumnsTabletLandscape,
					pageGridColumnsLaptop: gridSetting.pageGridColumnsLaptop,
					pageGridColumnsDesktop: gridSetting.pageGridColumnsDesktop,
		        }
		    });
			return gridSettings;
		},
		modules: state => {
			var modules = state.modules.map(stylingModule => {
		        return {
					resetCSS: stylingModule.resetCSS,
		        }
		    });
			return modules;
		},
	},
})