module.exports = {
  scripts: {
    build: 'rm -rf ./build && tsc',
    lint: {
      default: `tslint --project .`,
      report: `tslint --project . -t checkstyle -o reports/checkstyle.xml`,
    },
  },
};
