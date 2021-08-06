// (.+): \(
// export const $1 = (
// https://stackoverflow.com/questions/40564071/how-do-i-break-up-my-vuex-file


// Loading Initial State

// export const // setInitialState = (state, payload) =>  {
			// state.baseValues.forEach( baseValue => {
				// baseValue.bodyFontSize = payload.bodyFontSize; })};


// Base Values

export const updateBodySize = (state, payload) => {
	state.baseValues.forEach( baseValue => {
		// baseValue.bodyFontSize -= payload; // substract
		baseValue.bodyFontSize = payload; 
	})
};
export const updateBodyLineHeight = (state, payload) => {
	state.baseValues.forEach( baseValue => {
		baseValue.bodyLineHeight = payload;
	})
};
export const updateBodyLineHeightList = (state, payload) => {
	state.baseValues.forEach( baseValue => {
		baseValue.bodyLineHeightList = payload;
	})
};
export const updateScalingRatio = (state, payload) => {
	state.baseValues.forEach( baseValue => {
		baseValue.scalingRatio = payload;
	})
};
export const updateDefaultGutter = (state, payload) => {
	state.baseValues.forEach( baseValue => {
		baseValue.defaultGutter = payload;
	})
};
export const updateDefaultPadding = (state, payload) => {
	state.baseValues.forEach( baseValue => {
		baseValue.defaultPadding = payload;
	})
};
export const updateContainerWidth = (state, payload) => {
	state.baseValues.forEach( baseValue => {
		baseValue.containerWidth = payload;
	})
};

// Vertical Rhythm - Font Sizes

export const updateDisplayFontSize = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.displayFontSize = payload;
	})
};
export const updateH1FontSize = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.h1FontSize = payload;
	})
};
export const updateH2FontSize = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.h2FontSize = payload;
	})
};
export const updateH3FontSize = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.h3FontSize = payload;
	})
};
export const updateH4FontSize = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.h4FontSize = payload;
	})
};
export const updateH5FontSize = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.h5FontSize = payload;
	})
};
export const updateBodyLgFontSize = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.bodyLgFontSize = payload;
	})
};
export const updateCaptionFontSize = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.captionFontSize = payload;
	})
};
export const updateLabelFontSize = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.labelFontSize = payload;
	})
};
export const updateMicroFontSize = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.microFontSize = payload;
	})
};

// Vertical Rhythm - Line Height

export const updateDisplayLineHeight = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.displayLineHeight = payload;
	})
};
export const updateH1LineHeight = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.h1LineHeight = payload;
	})
};
export const updateH2LineHeight = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.h2LineHeight = payload;
	})
};
export const updateH3LineHeight = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.h3LineHeight = payload;
	})
};
export const updateH4LineHeight = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.h4LineHeight = payload;
	})
};
export const updateH5LineHeight = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.h5LineHeight = payload;
	})
};
export const updateBodyLgLineHeight = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.bodyLgLineHeight = payload;
	})
};
export const updateCaptionLineHeight = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.captionLineHeight = payload;
	})
};
export const updateLabelLineHeight = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.labelLineHeight = payload;
	})
};
export const updateMicroLineHeight = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.microLineHeight = payload;
	})
};

// Vertical Rhythm - Margin Bottom

export const updateDisplayMarginBottom = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.displayMarginBottom = payload;
	})
};
export const updateH1MarginBottom = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.h1MarginBottom = payload;
	})
};
export const updateH2MarginBottom = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.h2MarginBottom = payload;
	})
};
export const updateH3MarginBottom = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.h3MarginBottom = payload;
	})
};
export const updateH4MarginBottom = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.h4MarginBottom = payload;
	})
};
export const updateH5MarginBottom = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.h5MarginBottom = payload;
	})
};
export const updateBodyLgMarginBottom = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.bodyLgMarginBottom = payload;
	})
};
export const updateCaptionMarginBottom = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.captionMarginBottom = payload;
	})
};
export const updateLabelMarginBottom = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.labelMarginBottom = payload;
	})
};
export const updateMicroMarginBottom = (state, payload) => {
	state.verticalRhythmValues.forEach( verticalRhythmValue => {
		verticalRhythmValue.microMarginBottom = payload;
	})
};

// Typesetting

export const updateEnableFontSmoothing = (state, payload) => {
	state.typeSettings.forEach( typeSetting => {
		typeSetting.enableFontSmoothing = payload;
	})
};

// Breakpoints
		
export const updateBreakpointPhoneLandscape = (state, payload) => {
	state.gridSettings.forEach( breakpoint => {
		breakpoint.breakpointPhoneLandscape = payload;
	})
};
export const updateBreakpointTabletPortrait = (state, payload) => {
	state.breakpoints.forEach( breakpoint => {
		breakpoint.breakpointTabletPortrait = payload;
	})
};
export const updateBreakpointTabletLandscape = (state, payload) => {
	state.breakpoints.forEach( breakpoint => {
		breakpoint.breakpointTabletLandscape = payload;
	})
};
export const updateBreakpointLaptop = (state, payload) => {
	state.breakpoints.forEach( breakpoint => {
		breakpoint.breakpointLaptop = payload;
	})
};
export const updateBreakpointDesktop = (state, payload) => {
	state.breakpoints.forEach( breakpoint => {
		breakpoint.breakpointDesktop = payload;
	})
};
export const updateBreakpointDesktopLg = (state, payload) => {
	state.breakpoints.forEach( breakpoint => {
		breakpoint.breakpointDesktopLg = payload;
	})
};
		
// Grid Settings

export const updateApplyCssGrid = (state, payload) => {
	state.gridSettings.forEach( gridSetting => {
		gridSetting.applyCssGrid = payload;
	})
};
export const updatePageGridColumnsPhoneLandscape = (state, payload) => {
	state.gridSettings.forEach( gridSetting => {
		gridSetting.pageGridColumnsPhoneLandscape = payload;
	})
};
export const updatePageGridColumnsTabletPortrait = (state, payload) => {
	state.gridSettings.forEach( gridSetting => {
		gridSetting.pageGridColumnsTabletPortrait = payload;
	})
};
export const updatePageGridColumnsTabletLandscape = (state, payload) => {
	state.gridSettings.forEach( gridSetting => {
		gridSetting.pageGridColumnsTabletLandscape = payload;
	})
};
export const updatePageGridColumnsLaptop = (state, payload) => {
	state.gridSettings.forEach( gridSetting => {
		gridSetting.pageGridColumnsLaptop = payload;
	})
};
export const updatePageGridColumnsDesktop = (state, payload) => {
	state.gridSettings.forEach( gridSetting => {
		gridSetting.pageGridColumnsDesktop = payload;
	})
};
		
// Modules

export const updateResetCSS = (state, payload) => {
	state.modules.forEach( module => {
		module.resetCSS = payload;
	})
};