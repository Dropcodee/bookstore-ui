import moment from 'moment';

// eslint-disable-next-line import/prefer-default-export
export function DateFormatter(dateString) {
  return moment(dateString).format('DD-MMM-YYYY');
}
