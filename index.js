/**
 * PATEOAS - Prompt as Engine of AI State
 * A revolutionary AI state management paradigm
 * 
 * @author Deepractice Team
 * @license MIT
 */

const fs = require('fs');
const path = require('path');

/**
 * PATEOAS Core Module
 */
class PATEOAS {
  constructor() {
    this.version = require('./package.json').version;
    this.name = 'PATEOAS';
    this.description = 'Prompt as Engine of AI State';
  }

  /**
   * Get PATEOAS concept description
   */
  getConcept() {
    return {
      name: 'PATEOAS',
      fullName: 'Prompt as Engine of AI State',
      description: 'A revolutionary AI state management paradigm that transforms prompts from static inputs into dynamic state engines.',
      coreElements: [
        'State Awareness - AI always knows its current state',
        'State Driven - Next behavior is determined by current state', 
        'State Persistence - State continuously evolves during conversation'
      ]
    };
  }

  /**
   * Get whitepaper content
   */
  getWhitepaper(language = 'en') {
    const filename = language === 'zh' ? 'whitepaper.md' : 'whitepaper_en.md';
    const whitepaperPath = path.join(__dirname, filename);
    
    try {
      return fs.readFileSync(whitepaperPath, 'utf8');
    } catch (error) {
      return `Whitepaper not found. Please visit: https://github.com/Deepractice/PATEOAS`;
    }
  }

  /**
   * Create a PATEOAS-compliant response structure
   */
  createResponse(content, currentState, nextSteps) {
    return {
      answer: content,
      currentState: {
        task: currentState.task || 'Processing request',
        progress: currentState.progress || 'In progress',
        memory: currentState.memory || [],
        metaCognition: currentState.metaCognition || 'State-aware AI'
      },
      nextSteps: nextSteps || ['Continue conversation', 'Refine requirements', 'Execute next action']
    };
  }

  /**
   * Validate PATEOAS response format
   */
  validateResponse(response) {
    const required = ['answer', 'currentState', 'nextSteps'];
    return required.every(key => key in response);
  }
}

// Export the main class and utility functions
module.exports = {
  PATEOAS,
  createResponse: (content, state, steps) => new PATEOAS().createResponse(content, state, steps),
  validateResponse: (response) => new PATEOAS().validateResponse(response),
  getConcept: () => new PATEOAS().getConcept()
};

// Default export for ES6 imports
module.exports.default = PATEOAS; 