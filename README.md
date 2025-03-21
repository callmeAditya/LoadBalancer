# LoadBalancer

A simple Load Balancer implemented using Node.js.

## Overview

This project demonstrates a basic load balancer that distributes incoming HTTP requests across multiple backend servers using the Round Robin algorithm. It's designed to efficiently manage traffic and ensure even distribution of requests.

## Features

- **Round Robin Load Balancing:** Distributes incoming requests sequentially across a list of backend servers.
- **Backend Server Management:** Allows easy addition and removal of backend servers via a JSON configuration file.
- **Health Check Mechanism:** (Optional) Implement health checks to monitor the status of backend servers and route traffic only to healthy ones.

## File Structure

- `server.js`: Main entry point for the load balancer.
- `backendServer.js`: Script to start a simple backend server.
- `roundRobin.js`: Contains the Round Robin algorithm for selecting backend servers.
- `servers.json`: Configuration file listing all backend servers.
- `test_load_balancer.sh`: Shell script to test the load balancer by sending multiple requests.
- `.gitignore`: Specifies files and directories to be ignored by git.
- `package.json`: Contains project metadata and dependencies.
- `package-lock.json`: Records the exact version of each installed package.

## Prerequisites

- **Node.js:** Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/callmeAditya/LoadBalancer.git
   cd LoadBalancer
