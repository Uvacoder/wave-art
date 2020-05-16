const wave = (svg, height, position) => `
  content: "";
  width: 100%;
  height: ${height}px;
  position: absolute;
  bottom: -0.3%;
  left: 0;
  background-size: auto;
  background-repeat: repeat no-repeat;
  background-position: ${position}vw bottom;
  background-image: url("${svg}");
`

const container = color => `
  height: 50vh;
  background-color: ${color};
  position: relative;
`

const responsiveWave = height => `
    height: ${height * 0.5}px
`

const cssClassContainer = "wave-container"

export const WaveContainer = (options, svg, containerColor) => `
  ${container(containerColor)}
  &::before {
    ${wave(svg, options.Height.value, options.Position.value)}
    @media(max-width:850px) {
      ${responsiveWave(options.Height.value)}
    }
  }
`
// prettier-ignore
export const VanillaCSSWaveCode = (options, svg, containerColor) => `\
.${cssClassContainer} {\
  ${container(containerColor)}\
}

.${cssClassContainer}::before { \
  ${wave(svg, options.Height.value, options.Position.value)}\
}

@media(max-width:850px) {
  .wave-container::before {\
    ${responsiveWave(options.Height.value)}\
  }  
}`

export const HtmlWaveCode = `\
 <div class="${cssClassContainer}"></div>
`
