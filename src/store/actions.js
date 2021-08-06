// ___________
// Base Values

export const updateBodySize = (context, payload) => {
	setTimeout(function(){ // setTimeout set to 10 "temporarly" to demonstrate how to keep vue on track with actions that may cause delays, like API calls.
		context.commit('updateBodySize', payload) 
	}, 10)
};
export const updateBodyLineHeight = (context, payload) => {
	setTimeout(function(){
		context.commit('updateBodyLineHeight', payload) 
	}, 10)
};
export const updateBodyLineHeightList = (context, payload) => {
	setTimeout(function(){
		context.commit('updateBodyLineHeightList', payload)
	}, 10)
};
export const updateScalingRatio = (context, payload) => {
	setTimeout(function(){
		context.commit('updateScalingRatio', payload)
	}, 10)
};
export const updateDefaultGutter = (context, payload) => {
	setTimeout(function(){
		context.commit('updateDefaultGutter', payload)
	}, 10)
};
export const updateDefaultPadding = (context, payload) => {
	setTimeout(function(){
		context.commit('updateDefaultPadding', payload)
	}, 10)
};
export const updateContainerWidth = (context, payload) => {
	setTimeout(function(){
		context.commit('updateContainerWidth', payload)
	}, 10)
};
// ____________________________
// Vertical Rhythm - Font Sizes

export const updateDisplayFontSize = (context, payload) => {
	setTimeout(function(){
		context.commit('updateDisplayFontSize', payload)
	}, 10)
};
export const updateH1FontSize = (context, payload) => {
	setTimeout(function(){
		context.commit('updateH1FontSize', payload)
	}, 10)
};
export const updateH2FontSize = (context, payload) => {
	setTimeout(function(){
		context.commit('updateH2FontSize', payload)
	}, 10)
};
export const updateH3FontSize = (context, payload) => {
	setTimeout(function(){
		context.commit('updateH3FontSize', payload)
	}, 10)
};
export const updateH4FontSize = (context, payload) => {
	setTimeout(function(){
		context.commit('updateH4FontSize', payload)
	}, 10)
};
export const updateH5FontSize = (context, payload) => {
	setTimeout(function(){
		context.commit('updateH5FontSize', payload)
	}, 10)
};
export const updateBodyLgFontSize = (context, payload) => {
	setTimeout(function(){
		context.commit('updateBodyLgFontSize', payload)
	}, 10)
};
export const updateCaptionFontSize = (context, payload) => {
	setTimeout(function(){
		context.commit('updateCaptionFontSize', payload)
	}, 10)
};
export const updateLabelFontSize = (context, payload) => {
	setTimeout(function(){
		context.commit('updateLabelFontSize', payload)
	}, 10)
};
export const updateMicroFontSize = (context, payload) => {
	setTimeout(function(){
		context.commit('updateMicroFontSize', payload)
	}, 10)
};
// _____________________________
// Vertical Rhythm - Line Height

export const updateDisplayLineHeight = (context, payload) => {
	setTimeout(function(){
		context.commit('updateDisplayLineHeight', payload)
	}, 10)
};
export const updateH1LineHeight = (context, payload) => {
	setTimeout(function(){
		context.commit('updateH1LineHeight', payload)
	}, 10)
};
export const updateH2LineHeight = (context, payload) => {
	setTimeout(function(){
		context.commit('updateH2LineHeight', payload)
	}, 10)
};
export const updateH3LineHeight = (context, payload) => {
	setTimeout(function(){
		context.commit('updateH3LineHeight', payload)
	}, 10)
};
export const updateH4LineHeight = (context, payload) => {
	setTimeout(function(){
		context.commit('updateH4LineHeight', payload)
	}, 10)
};
export const updateH5LineHeight = (context, payload) => {
	setTimeout(function(){
		context.commit('updateH5LineHeight', payload)
	}, 10)
};
export const updateBodyLgLineHeight = (context, payload) => {
	setTimeout(function(){
		context.commit('updateBodyLgLineHeight', payload)
	}, 10)
};
export const updateCaptionLineHeight = (context, payload) => {
	setTimeout(function(){
		context.commit('updateCaptionLineHeight', payload)
	}, 10)
};
export const updateLabelLineHeight = (context, payload) => {
	setTimeout(function(){
		context.commit('updateLabelLineHeight', payload)
	}, 10)
};
export const updateMicroLineHeight = (context, payload) => {
	setTimeout(function(){
		context.commit('updateMicroLineHeight', payload)
	}, 10)
};

// _______________________________
// Vertical Rhythm - Margin Bottom

export const updateDisplayMarginBottom = (context, payload) => {
	setTimeout(function(){
		context.commit('updateDisplayMarginBottom', payload)
	}, 10)
};
export const updateH1MarginBottom = (context, payload) => {
	setTimeout(function(){
		context.commit('updateH1MarginBottom', payload)
	}, 10)
};
export const updateH2MarginBottom = (context, payload) => {
	setTimeout(function(){
		context.commit('updateH2MarginBottom', payload)
	}, 10)
};
export const updateH3MarginBottom = (context, payload) => {
	setTimeout(function(){
		context.commit('updateH3MarginBottom', payload)
	}, 10)
};
export const updateH4MarginBottom = (context, payload) => {
	setTimeout(function(){
		context.commit('updateH4MarginBottom', payload)
	}, 10)
};
export const updateH5MarginBottom = (context, payload) => {
	setTimeout(function(){
		context.commit('updateH5MarginBottom', payload)
	}, 10)
};
export const updateBodyLgMarginBottom = (context, payload) => {
	setTimeout(function(){
		context.commit('updateBodyLgMarginBottom', payload)
	}, 10)
};
export const updateCaptionMarginBottom = (context, payload) => {
	setTimeout(function(){
		context.commit('updateCaptionMarginBottom', payload)
	}, 10)
};
export const updateLabelMarginBottom = (context, payload) => {
	setTimeout(function(){
		context.commit('updateLabelMarginBottom', payload)
	}, 10)
};
export const updateMicroMarginBottom = (context, payload) => {
	setTimeout(function(){
		context.commit('updateMicroMarginBottom', payload)
	}, 10)
};

// ___________
// Typesetting

export const updateEnableFontSmoothing = (context, payload) => {
	setTimeout(function(){
		context.commit('updateEnableFontSmoothing', payload)
	}, 10)
};

// ___________
// Breakpoints
		
export const updateBreakpointPhoneLandscape = (context, payload) => {
	setTimeout(function(){
		context.commit('updateBreakpointPhoneLandscape', payload)
	}, 10)
};
export const updateBreakpointTabletPortrait = (context, payload) => {
	setTimeout(function(){
		context.commit('updateBreakpointTabletPortrait', payload)
	}, 10)
};
export const updateBreakpointTabletLandscape = (context, payload) => {
	setTimeout(function(){
		context.commit('updateBreakpointTabletLandscape', payload)
	}, 10)
};
export const updateBreakpointLaptop = (context, payload) => {
	setTimeout(function(){
		context.commit('updateBreakpointLaptop', payload)
	}, 10)
};
export const updateBreakpointDesktop = (context, payload) => {
	setTimeout(function(){
		context.commit('updateBreakpointDesktop', payload)
	}, 10)
};
export const updateBreakpointDesktopLg = (context, payload) => {
	setTimeout(function(){
		context.commit('updateBreakpointDesktopLg', payload)
	}, 10)
};
		
// _____________
// Grid Settings
		
export const updateApplyCssGrid = (context, payload) => {
	setTimeout(function(){
		context.commit('updateApplyCssGrid', payload)
	}, 10)
};
export const updatePageGridColumnsPhoneLandscape = (context, payload) => {
	setTimeout(function(){
		context.commit('updatePageGridColumnsPhoneLandscape', payload)
	}, 10)
};
export const updatePageGridColumnsTabletPortrait = (context, payload) => {
	setTimeout(function(){
		context.commit('updatePageGridColumnsTabletPortrait', payload)
	}, 10)
};
export const updatePageGridColumnsTabletLandscape = (context, payload) => {
	setTimeout(function(){
		context.commit('updatePageGridColumnsTabletLandscape', payload)
	}, 10)
};
export const updatePageGridColumnsLaptop = (context, payload) => {
	setTimeout(function(){
		context.commit('updatePageGridColumnsLaptop', payload)
	}, 10)
};
export const updatePageGridColumnsDesktop = (context, payload) => {
	setTimeout(function(){
		context.commit('updatePageGridColumnsDesktop', payload)
	}, 10)
};

// ________
//  Modules

export const updateResetCSS = (context, payload) => {
	setTimeout(function(){
		context.commit('updateResetCSS', payload)
	}, 10)
};

// _____________________
// Loading Initial State

export const loadInitialState = (context, payload) => {
	// console.log('loading insitial state action')
	// setTimeout(function(){context.commit('setInitialState', getInitialData()) }, 1000)
};