//evals.ts

import { EvalConfig } from 'mcp-evals';
import { openai } from "@ai-sdk/openai";
import { grade, EvalFunction } from "mcp-evals";

const ip_lookupEval: EvalFunction = {
    name: "ip_lookup Evaluation",
    description: "Evaluates the IP lookup for comprehensive geolocation, open ports, and related data",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please retrieve all available information about the IP address 8.8.8.8, including geolocation, open ports, running services, SSL certificates, hostnames, cloud provider details, and any relevant service banners or HTTP server information.");
        return JSON.parse(result);
    }
};

const shodan_searchEval: EvalFunction = {
    name: "shodan_searchEval",
    description: "Evaluates searching Shodan for internet-connected devices",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Search for IoT devices in Germany with port 22 open and list any vulnerabilities. Include country-based statistics.");
        return JSON.parse(result);
    }
};

const cve_lookupEval: EvalFunction = {
    name: "cve_lookupEval",
    description: "Evaluates the functionality of the cve_lookup tool",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Retrieve detailed vulnerability information for CVE-2023-1234, including CVSS v2/v3 scores, EPSS probability and ranking, KEV status, proposed mitigations, ransomware associations, and affected CPEs. Provide a summary of the findings.");
        return JSON.parse(result);
    }
};

const dns_lookupEval: EvalFunction = {
    name: 'dns_lookup Tool Evaluation',
    description: 'Evaluates the dns_lookup tool by testing domain name resolution to IP addresses',
    run: async () => {
        const result = await grade(openai("gpt-4"), "Resolve the domain 'example.com' to its IP address(es) using the dns_lookup tool.");
        return JSON.parse(result);
    }
};

const cpe_lookupEval: EvalFunction = {
    name: "cpe_lookup Tool Evaluation",
    description: "Evaluates the cpe_lookup tool's functionality to search for CPE entries by product name in Shodan's CVEDB",
    run: async () => {
        const result = await grade(openai("gpt-4"), "Please search for all CPE entries for 'Apache Tomcat' after version 9 in Shodan’s CVEDB, returning both total count and the first page of detailed results.");
        return JSON.parse(result);
    }
};

const config: EvalConfig = {
    model: openai("gpt-4"),
    evals: [ip_lookupEval, shodan_searchEval, cve_lookupEval, dns_lookupEval, cpe_lookupEval]
};
  
export default config;
  
export const evals = [ip_lookupEval, shodan_searchEval, cve_lookupEval, dns_lookupEval, cpe_lookupEval];