
import * as fcl from "@onflow/fcl";
import { fclConfig } from "./config";

fclConfig();

export async function CreateGig(owner, ownerEmail, title, description, gigTimeline, budget) {
  return fcl.mutate({
    cadence: `

      import Declan from 0xDeclan

      transaction(owner:Address, ownerEmail: String, title: String, description: String, gigTimeline: UInt64, budget: UInt64) {
        prepare(account: AuthAccount) {
          let gig = DeclanWork.createGig(
            owner: owner,
            ownerEmail: ownerEmail,
            freelancer: owner,
            title: title,
            description: description,
            gigTimeline: gigTimeline,
            deadline: 0,
            budget: budget,
            featureGig: false,
            bidders: {},
            status: "open",
            escrower: owner,
            escrowAmount: 0,
            warningCount: 0,
          )

          log("Gig created with ID:", gig.id)

          // Emit GigCreated event
          emit DeclanWork.GigCreated(gigId: gig.id)
        }
      }
    `,
    args: (arg, t) => [
      arg(owner, t.Address),
      arg(ownerEmail, t.String),
      arg(title, t.String),
      arg(description, t.String),
      arg(gigTimeline, t.UInt64),
      arg(budget, t.UInt64),
    ],
    proposer: fcl.currentUser,
    payer: fcl.currentUser,
    authorizations: [fcl.currentUser],
    limit: 1000,
  });
}

export async function createFreelancerAccount(name,address,portfolioURL, skills, categories,  verified, stars, email, country, jobCount) {
  return fcl.mutate({
    cadence: `

      import Declan from 0xDeclan

      transaction(name: String,
        address: Address,
        portfolioURL: String,
        skills: [String],
        categories: [String],
        verified: Bool,
        stars: UInt32,
        email: String,
        country: String,
        jobCount: UInt32) {
        prepare(account: AuthAccount) {
          let gig = DeclanWork.createFreelancerAccount(
            name: name,
            address: address,
            portfolioURL: portfolioURL,
            skills: skills,
            categories: categories,
            verified: false,
            stars: 0,
            email: email,
            country: country,
            jobCount: 0,
          )

          log("Gig created with ID:", gig.id)

          // Emit GigCreated event
          emit DeclanWork.GigCreated(gigId: gig.id)
        }
      }
    `,
    args: (arg, t) => [
      arg(name, t.String),
      arg(address, t.Address),
      arg(portfolioURL, t.String),
      arg(skills, t.String),
      arg(categories, t.String),
      arg(verified, t.Bool),
      arg(stars, t.UInt32),
      arg(email, t.String),
      arg(country, t.String),
      arg(jobCount, t.UInt32),
      ,
        
    ],
    proposer: fcl.currentUser,
    payer: fcl.currentUser,
    authorizations: [fcl.currentUser],
    limit: 1000,
  });
}