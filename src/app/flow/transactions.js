
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

export async function createFreelancerAccount(name, portfolioURL, skills, categories, verified, stars) {
  return fcl.mutate({
    cadence: `
      import DeclanWork from 0xDeclanWork

      transaction(
        name: String,
        portfolioURL: String,
        skills: [String],
        categories: [String],
        verified: Bool,
        stars: [String]) {
        prepare(account: AuthAccount) {
          let gig = DeclanWork.createGig(
            name: name,
            portfolioURL: portfolioURL,
            skills: skills,
            categories: categories,
            verified: verified,
            stars: stars,
          )

          // log("Gig created with ID:", gig.id)

          // Emit GigCreated event
          // emit DeclanWork.GigCreated(gigId: gig.id)
        }
      }
    `,
    args: (arg, t) => [
      arg(name, t.String),
      arg(portfolioURL, t.String),
      // arg(skills, t.[String]),
      // arg(categories, t.[String]),
      arg(verified, t.Bool),
      // arg(,stars, t.[String])
    ],
    proposer: fcl.currentUser,
    payer: fcl.currentUser,
    authorizations: [fcl.currentUser],
    limit: 1000,
  });
}