import {
  createCourseReaderViewer,
  presets,
  type CourseReaderViewer,
  type CourseReaderViewerOptions,
  type PresetDefinition,
  type PresetMap,
} from '@projektemacher/coursereader';
import bookPresets from '../../json/presets.json';

const settingsKeys = [
  'paper',
  'exposure',
  'ink',
  'tone',
  'artifacts',
  'capture',
  'border',
  'extends',
];

if (settingsKeys.some((key) => key in bookPresets)) {
  presets.set('strandkorb', bookPresets as PresetDefinition);
} else {
  presets.import(bookPresets as PresetMap);
}

function bookViewer(
  target: string | HTMLElement,
  options: CourseReaderViewerOptions,
): CourseReaderViewer {
  return createCourseReaderViewer(target, options);
}

window.bookViewer = bookViewer;
