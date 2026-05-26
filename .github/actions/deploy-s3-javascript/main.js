const core = require("@actions/core");
const github = require("@actions/github");
const exec = require("@actions/exec");

async function run() {
  const bucket = core.getInput("bucket", { required: true });
  const bucketRegion = core.getInput("bucket-region", {
    required: true,
  });
  const distFolder = core.getInput("dist-folder", { required: true });

  // github.context; // Access GitHub context if needed

  const s3Uri = `s3://${bucket}`;
  exec.exec(`aws s3 sync ${distFolder} ${s3Uri} --region ${bucketRegion}`);

  core.notice("Hello from my custom JavaScript action!");
}

run();
