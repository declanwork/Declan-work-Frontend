// import * as fcl from "@onflow/fcl";
// import { fclConfig } from "./config";

// fclConfig();

// export async function CreateGig(title, description, budget, deadline, gigTimeline, featureGig, freelancer, status, completed, escrow) {
//   return fcl.mutate({
//     cadence: `
//       import DeclanWork from 0xDeclanWork

//       transaction(title: String, description: String, budget: UFix64, deadline: Int16, gigTimeline: String, featureGig: Bool, freelancer: DeclanWork.Freelancer?, status: String, completed: Bool, escrow: UFix64) {
//         prepare(account: AuthAccount) {
//           let gig = DeclanWork.createGig(
//             title: title,
//             description: description,
//             budget: budget,
//             deadline: deadline,
//             gigTimeline: gigTimeline,
//             featureGig: featureGig,
//             freelancer: freelancer,
//             status: status,
//             completed: completed,
//             escrow: escrow
//           )

//           log("Gig created with ID:", gig.id)

//           // Emit GigCreated event
//           emit DeclanWork.GigCreated(gigId: gig.id)
//         }
//       }
//     `,
//     args: (arg, t) => [
//       arg(title, t.String),
//       arg(description, t.String),
//       arg(budget, t.UFix64),
//       arg(deadline, t.Int16),
//       arg(gigTimeline, t.String),
//       arg(featureGig, t.Bool),
//       // arg(freelancer, t.Optional(t.Reference("DeclanWork.Freelancer"))),
//       arg(status, t.String),
//       arg(completed, t.Bool),
//       arg(escrow, t.UFix64),
//     ],
//     proposer: fcl.currentUser,
//     payer: fcl.currentUser,
//     authorizations: [fcl.currentUser],
//     limit: 1000,
//   });
// }

import * as fcl from "@onflow/fcl";
import { fclConfig } from "./config";

fclConfig();

export async function CreateGig(title, description, budget, deadline, gigTimeline, featureGig, status, completed, escrow) {
  return fcl.mutate({
    cadence: `
      import DeclanWork from 0xDeclanWork

      transaction(buyer: Address, seller: Address, title: String, description: String, budget: UFix64, deadline: Int16, gigTimeline: String, featureGig: Bool, status: String, completed: Bool, escrow: UFix64) {
        prepare(account: AuthAccount) {
          let gig = DeclanWork.createGig(
            title: title,
            description: description,
            budget: budget,
            deadline: deadline,
            gigTimeline: gigTimeline,
            featureGig: featureGig,
            // freelancer: freelancer,
            status: status,
            completed: completed,
            escrow: escrow
          )

          log("Gig created with ID:", gig.id)

          // Emit GigCreated event
          emit DeclanWork.GigCreated(gigId: gig.id)
        }
      }
    `,
    args: (arg, t) => [
      arg(title, t.String),
      arg(description, t.String),
      arg(budget, t.UFix64),
      arg(deadline, t.Int16),
      arg(gigTimeline, t.String),
      arg(featureGig, t.Bool),
      // arg(freelancer, t.Optional(t.Reference("DeclanWork.Freelancer"))),
      arg(status, t.String),
      arg(completed, t.Bool),
      arg(escrow, t.UFix64),
    ],
    proposer: fcl.currentUser,
    payer: fcl.currentUser,
    authorizations: [fcl.currentUser],
    limit: 1000,
  });
}

