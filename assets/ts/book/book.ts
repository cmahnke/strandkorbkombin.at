import {
  createCourseReaderViewer,
  type CourseReaderViewer,
  type CourseReaderViewerOptions,
} from '@projektemacher/coursereader';

function bookViewer(
  target: string | HTMLElement,
  options: CourseReaderViewerOptions,
): CourseReaderViewer {
  return createCourseReaderViewer(target, options);
}

window.bookViewer = bookViewer;
