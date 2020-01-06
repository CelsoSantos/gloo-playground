const { GetMappingRulesRequest, GetMappingRulesResponse } = require("./service_pb")
const { StoryServiceClient } = require("./service_grpc_web_pb");
var env = "apis.example.com"
var client = new StoryServiceClient(env);

var request = new GetMappingRulesRequest()

export function getMappingRules() {
	client.getMappingRules(request, {}, (err, response) => {
		console.log("Result of Add : ", response.getMappingrules())
	});
}